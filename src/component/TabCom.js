import React from 'react';

const TabCom = (props) => {
   return (
       <div className="tab_panel">
           {
               props.title.map((item) => {
                   return (
                       <p
                           key={item.id}
                           className={item.id === props.activeId ? 'active_item' : ''}
                           onClick={() => {props.selectTab(item.id)}}
                       >{item.name}</p>
                   )
               })
           }
       </div>
   )
}

export default TabCom;