import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

export class TreeTableScrollDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Vertical</h5>
                    <TreeTable value={this.state.nodes} scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Horizontal</h5>
                    <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }}>
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Horizontal and Vertical</h5>
                    <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Frozen Columns</h5>
                    <TreeTable value={this.state.nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                        <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
                    </TreeTable>
                </div>
            </div>
        )
    }
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<TreeTableScrollDemo />, rootElement);