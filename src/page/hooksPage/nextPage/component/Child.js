import React, {useMemo} from 'react';

/*传递name为组件属性传入，传递children为组件content传入*/
function Child({name, children}) {
    function changeOptions(name) {
        console.log('change');
        return name + '是用户'
    }
    // const action = changeOptions(name);
    /*只让name发生变化时才触发changeOptions方法*/
    const action = useMemo(() => changeOptions(name), [name]);
    return (
        <div>
            {/*name变化时视更新*/}
            <div>{action}</div>
            {/*children变化时更新*/}
            <div>{children}</div>
        </div>
    )
}
export default Child;