import React, {Component} from 'react';
import classes from './Layout.css';
import Auxe from '../../Hoc/Auxe';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';




class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    backdropCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawertoggleHandler = ()=> {
        this.setState(prevState =>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }


    render(){
        return(
            <Auxe>
            <Toolbar sidedraweToggle={this.sideDrawertoggleHandler} />
            <SideDrawer show={this.state.showSideDrawer} close={this.backdropCloseHandler} />
            <main className={classes.Content}> {this.props.children} </main>
            </Auxe>
        )
    }
}
export default Layout;