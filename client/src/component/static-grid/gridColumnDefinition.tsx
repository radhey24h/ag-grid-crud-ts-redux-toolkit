import React, { memo, useMemo, useState } from "react";
import {
    ColDef,
    ICellEditorParams,
    ICellRendererParams,
} from 'ag-grid-community';
import { CauseType } from "./dropdownData";
import { useAppSelector } from "../../store";

const addRow = (e: any, params: any) => {
    console.log('addRow', e, params);
}
const handleDeleteRisk = (e: any) => {
    console.log('handleDeleteRisk', e.data);
    e.data.parentBOMLevel++;
    e.api.refreshCells();
}
const addRemoveColumnRenderer = (params: any) => {
    return (
        <div className="d-flex justify-content-evenly align-items-center" >
            <a className="" href="#" onClick={(e: any) => addRow(e, params)}>Add</a> &nbsp;&nbsp;
            <a style={{ width: "20px" }} href="#" onClick={() => { handleDeleteRisk(params); }}>Delete</a>
        </div>);
};

const handleChangeCauseType = (e: any) => {
    console.log('handleChangeCauseType', e);
    e.data.parentBOMLevel++;
    e.api.refreshCells();
}
const CauseTypeCellRenderer = memo((params: any, props: ICellRendererParams) => {
    const { causeType } = useAppSelector((state) => state.causeType);
    console.log('causeType 1', causeType)
    const option = causeType?.map((cause: any) => {
        return <>
            <option value={cause.causeType}><i>{cause.colorCode}</i>{CauseType[cause.causeType]}</option>
        </>
    });

    return <select onChange={() => { handleChangeCauseType(params); }}>
        {option}
    </select>
});

const ChangeCellBackgroundColor = (params: any) => {
    
    const { causeType } = useAppSelector((state) => state.causeType);
    
    console.log('causesTypes 2', causeType)
    if (params.data.causeType !== "") {
        return {
            backgroundColor: CauseType[params.data.causeType],

            color: params.data.causeType === 0 || params.data.causeType === 2 ? "#000" : "#444444",
            margin: "3px",
            lineHeight: "25px",
            height: "25px",
            marginLeft: "5px",
        };
    }
}

const currentRankingOccurrenceRenderer = () => {

}
const currentRankingSeverityRenderer = () => {

}
const currentCriticalityField = () => {

}
const cellSeverityEditorParams = {
    value: []
}
const cellOccurrenceEditorParams = {
    value: []
}
const gridColumnDefs = [
    {
        headerName: "Add/Remove Risk",
        maxWidth: 119,
        suppressMenu: true,
        wrapHeaderText: true,
        autoHeaderHeight: true,
        editable: false,
        cellRenderer: addRemoveColumnRenderer
    },
    {
        headerName: "BOM Level",
        field: "parentBOMLevel",
        editable: false,
        resizable: true,
        minWidth: 130,
    },
    {
        headerName: "Parent Part #",
        field: "parentPartNumber",
        editable: false,
        resizable: true,
        minWidth: 145,
    },
    {
        headerName: "Parent Part Description",
        field: "parentPartDescription",
        editable: false,
        resizable: true,
        minWidth: 240,
    },
    {
        headerName: "Part #",
        field: "partNumber",
        editable: false,
        resizable: true,
        minWidth: 120,
    },
    {
        headerName: "Part Description",
        field: "partDescription",
        minWidth: 250,
        editable: false,
        resizable: true,
    },
    {
        headerName: "Part Function",
        field: "partFunction",
        editable: true,
        resizable: true,
        minWidth: 200,
    },
    {
        headerName: "Potential Failure Mode",
        field: "potentialFailureMode",
        minWidth: 206,
        cellEditor: "agLargeTextCellEditor",
        cellEditorPopup: false,
        resizable: true,
        cellStyle: ChangeCellBackgroundColor
    },
    {
        headerName: "Effects of Failure",
        field: "effectsofFailure",
        minWidth: 167,
        wrapHeaderText: true,
        resizable: true,
        autoHeaderHeight: true,
        cellEditor: "agLargeTextCellEditor",
        cellEditorPopup: false,
        cellStyle: ChangeCellBackgroundColor,
    },
    {
        headerName: "Potential Cause of Failure Mode",
        field: "potentialCausesofFailureMode",
        minWidth: 265,
        cellEditor: "agLargeTextCellEditor",
        cellEditorPopup: false,
        resizable: true,
        cellStyle: ChangeCellBackgroundColor,
    },
    {
        headerName: "Cause Type",
        field: "causeType",
        minWidth: 140,
        cellEditorPopup: true,
        resizable: true,
        editable: true,
        cellRenderer: CauseTypeCellRenderer,
        //cellEditorParams: colorCellEditorParams,
    },
    {
        headerName: "Manufacturing Control",
        field: "manufacturingControl",
        minWidth: 230,
        resizable: true,
    },
    {
        groupId: 'currentRankingGroupId',
        headerName: "Current Ranking",
        headerClass: "group-header-separator",
        children: [
            {
                headerName: "Severity (S)",
                field: "currentRankingSeverity",
                minWidth: 135,
                resizable: true,
                cellRenderer: currentRankingSeverityRenderer,
                cellEditor: "agSelectCellEditor",
                cellEditorParams: cellSeverityEditorParams,
            },
            {
                headerName: "Occurrence (O)",
                field: "currentRankingOccurrence",
                minWidth: 155,
                resizable: true,
                cellRenderer: currentRankingOccurrenceRenderer,
                cellEditor: "agSelectCellEditor",
                cellEditorParams: cellOccurrenceEditorParams,
            },
            {
                headerName: "Criticality (SO)",
                field: "currentRankingCriticality",
                minWidth: 155,
                resizable: true,
                cellRenderer: currentCriticalityField,
                editable: false,
            },
        ],
    },
    {
        headerName: "Action Owner",
        field: "actionOwner",
        resizable: true,
        minWidth: 180,
    },
    {
        headerName: "Action Taken",
        field: "actionTaken",
        minWidth: 145,
        resizable: true,
        cellEditor: "agLargeTextCellEditor",
        cellEditorPopup: true,
    },
    {
        headerName: "Action Status",
        field: "actionStatus",
        minWidth: 145,
        resizable: true,
        cellEditor: "agRichSelectCellEditor",
        cellEditorPopup: true,
        //cellEditorParams: cellEditorParams,
    }
];



export const GridColumnDefinition = {
    gridColumnDef: gridColumnDefs,

}