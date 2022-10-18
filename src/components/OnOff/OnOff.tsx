import React from 'react';
import styles from './OnOff.module.css'
type OnOffPropsType={
    name:string
    meaning:boolean

}

function OnOff(props:OnOffPropsType) {
    return (
        <button className={styles.meaningOff}>{props.name}</button>
    );
}

export default OnOff;