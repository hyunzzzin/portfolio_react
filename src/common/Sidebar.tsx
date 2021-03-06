import React from 'react'
import _ from 'lodash';
import './Sidebar.css'
const Sidebar = () =>{
    const category = ['introduce','product','board'];

    return(
        <>
            <div className="offcanvas offcanvas-end"  tabIndex={-1} id="hamberger"
                 aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">MENU</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-content" >
                    {_.map(category,(el,i)=>{
                        return(
                            <a className={"btn btn-secondary sidebar_menu mt-1"} href={"/"+el}>{el}</a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Sidebar;