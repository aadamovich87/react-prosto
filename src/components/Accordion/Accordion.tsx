import React from 'react';

type AccordionPropsTpe = {
    titleValue: string
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}

function Accordion(props: AccordionPropsTpe) {
    console.log("AccordionTitle rendering")
    return (
        <div>

            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>--- {props.title} ---</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>

        </ul>

    );
}

export default Accordion;