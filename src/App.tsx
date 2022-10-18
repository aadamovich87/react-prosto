import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

type PageTitlePropsType = {
    title: string
}

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Hello"} collapsed={true}/>
            <Accordion titleValue={"I a human"} collapsed={false}/>
            Article 1
            <Rating value={4}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={5}/>
            <div>
                <OnOff name={'On'} meaning={false}/>
                <OnOff name={'On'} meaning={true}/>
            </div>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;

