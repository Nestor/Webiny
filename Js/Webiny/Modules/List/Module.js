import Webiny from 'Webiny';
import ApiContainer from './Components/ApiContainer';
import StaticContainer from './Components/StaticContainer';
import Table from './Components/Table/Table';
import Row from './Components/Table/Row';
import Field from './Components/Table/Field';
import FieldInfo from './Components/Table/FieldInfo';
import FieldRenderer from './Components/Table/FieldRenderer';
import Header from './Components/Table/Header';
import Footer from './Components/Table/Footer';
import Filters from './Components/Filters';
import FormFilters from './Components/FormFilters';
import Pagination from './Components/Pagination';
import MultiActions from './Components/MultiActions';
import DateTimeField from './Components/Table/Fields/DateTimeField';
import DateField from './Components/Table/Fields/DateField';
import TimeField from './Components/Table/Fields/TimeField';
import FileSizeField from './Components/Table/Fields/FileSizeField';
import CaseField from './Components/Table/Fields/CaseField';
import ToggleField from './Components/Table/Fields/ToggleField';
import Actions from './Components/Table/Actions';
import Action from './Components/Table/Actions/Action';
import RouteAction from './Components/Table/Actions/RouteAction';
import EditAction from './Components/Table/Actions/EditAction';
import ModalAction from './Components/Table/Actions/ModalAction';
import DeleteAction from './Components/Table/Actions/DeleteAction';
import Empty from './Components/Table/Empty';

class Module extends Webiny.Module {

    init() {
        Webiny.Ui.Components.List = {
            ApiContainer,
            StaticContainer,
            Table: {
                Table,
                Header,
                Row,
                Field,
                FieldInfo,
                FieldRenderer,
                Footer,
                Empty,
                DateTimeField,
                DateField,
                TimeField,
                FileSizeField,
                CaseField,
                ToggleField,
                Actions,
                Action,
                EditAction,
                RouteAction,
                ModalAction,
                DeleteAction
            },
            Filters,
            FormFilters,
            MultiActions,
            Pagination
        };
    }
}

export default Module;