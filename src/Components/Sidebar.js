import React from 'react'
import  styled  from 'styled-components'
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import SidebarOption from './SidebarOption';


import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import InsertCommentSharpIcon from '@material-ui/icons/InsertCommentSharp';
import InboxSharpIcon from '@material-ui/icons/InboxSharp';
import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import FileCopySharpIcon from '@material-ui/icons/FileCopySharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { useCollection } from "react-firebase-hooks/firestore"

import { auth, db } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
    const [ channels, loading, error ] = useCollection(db.collection("rooms"))
    const [ user ]  = useAuthState(auth)
    

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Hagiasofia Group Chat</h2>
                    <h3>
                        <FiberManualRecordSharpIcon/>
                    </h3>
                </SidebarInfo>
                <CreateSharpIcon/>
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentSharpIcon} title='Threads'/>
            <SidebarOption Icon={InboxSharpIcon} title='Mentions & reactions'/>
            <SidebarOption Icon={DraftsSharpIcon} title='Saved items'/>
            <SidebarOption Icon={BookmarkBorderSharpIcon} title='Channel browser'/>
            <SidebarOption Icon={PeopleAltSharpIcon} title='People & user groups'/>
            <SidebarOption Icon={AppsSharpIcon} title='Apps'/>  
            <SidebarOption Icon={FileCopySharpIcon} title='File browser'/>
            <SidebarOption Icon={ExpandLessSharpIcon} title='Show less'/>

            <hr/>
            <SidebarOption Icon={ExpandMoreSharpIcon} title='Channel'/>

            <hr/>
            <SidebarOption Icon={AddSharpIcon} addChannelOption title='Add Chanel'/>

            {channels?.docs.map((doc) => (
            <SidebarOption
            key={doc.id}
            id = {doc.id}
            title={doc.data().name}
            />
            ))}
        </SidebarContainer> 
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.25;
    border-top: 1px solid #49274b;
    max-width: 160px;
    margin-top: 60px;

`

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    >.MuiSvgIcon-root {
        padding: 6px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px
    }
`;


const SidebarInfo  = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    h3 {
        display: flex;
        font-size: 12px;
        font-weight: 400px;
        align-items: center;
    }

    > h3 >.MuiSvgIcon-root{
        font-size: 12px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`