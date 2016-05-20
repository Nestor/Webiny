import Webiny from 'Webiny';
import Editor from './Editor';

class Module extends Webiny.Module {

    init() {
        Webiny.Ui.Components.HtmlEditor = Editor;
    }
}

export default Module;
