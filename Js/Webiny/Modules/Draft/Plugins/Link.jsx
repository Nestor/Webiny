import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;
import EntityPlugin from './../BasePlugins/EntityPlugin';

class LinkPlugin extends EntityPlugin {
    constructor(config) {
        super(config);
        this.validate = _.get(config, 'validate', 'required,url');
        this.name = 'link';
        this.entity = 'LINK';
        this.id = _.uniqueId('insertLink-');
    }

    createEntity() {
        this.editor.setReadOnly(true);
        this.ui(this.id).show();
    }

    submitModal(model) {
        const entityKey = Draft.Entity.create(this.entity, 'MUTABLE', model);
        this.ui(this.id).hide().then(() => {
            this.insertEntity(entityKey);
        });
    }

    getEditConfig() {
        return {
            toolbar: (
                <Ui.Draft.Toolbar.Entity icon="fa-link" plugin={this} tooltip="Insert a link"/>
            ),
            customView: (
                <Ui.Modal.Dialog ui={this.id}>
                    <Ui.Form ui="linkModalForm" onSubmit={this.submitModal.bind(this)} model={{target: '_blank'}}>
                        {(model, form) => (
                            <wrapper>
                                <Ui.Modal.Header title="Insert link"/>
                                <Ui.Modal.Body>
                                    <Ui.Grid.Row>
                                        <Ui.Grid.Col all={12}>
                                            <Ui.Input name="url" placeholder="Enter a URL" validate={this.validate}/>
                                            <Ui.Select name="target" placeholder="Select link target" validate="required">
                                                <option value="_blank">New tab</option>
                                                <option value="_self">Same tab</option>
                                            </Ui.Select>
                                        </Ui.Grid.Col>
                                    </Ui.Grid.Row>
                                </Ui.Modal.Body>
                                <Ui.Modal.Footer align="right">
                                    <Ui.Button type="default" key="cancel" label="Cancel" onClick={this.ui(this.id+':hide')}/>
                                    <Ui.Button type="primary" key="submit" label="Insert" onClick={form.submit}/>
                                </Ui.Modal.Footer>
                            </wrapper>
                        )}
                    </Ui.Form>
                </Ui.Modal.Dialog>
            ),
            handleKeyCommand: (command) => {
                if (command === this.entity && this.editor.getEditorState().getSelection().isCollapsed()) {
                    return true;
                }
            },
            decorators: [
                {
                    strategy: this.entity,
                    component: (props) => {
                        const data = Draft.Entity.get(props.entityKey).getData();
                        const onClick = (e) => {
                            if (!this.editor.getPreview()) {
                                e.stopPropagation();
                                e.preventDefault();
                            }
                        };
                        return (
                            <a onClick={onClick} href={data.url} target={data.target}>{props.children}</a>
                        );
                    }
                }
            ]
        };
    }
}

export default LinkPlugin;