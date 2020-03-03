import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// import components
import Header from '../components/header'
import LoginSlider from '../components/loginSlider'

// import styling
import '../styles/home.scss'

class Home extends React.Component {
    state = {
        loginSlider : false
    }

    handleLoginSlider = () => {
        this.setState({loginSlider : !this.state.loginSlider})
    }

    render () {
        const { loginSlider } = this.state
        const roleId = this.props.id || parseInt(localStorage.getItem('role'))
        if ([1, 2].includes(roleId)) return <Redirect to = '/dashboard'/>
        return (
            <div className = 'home-main-container'>
                <Header handleSignIn = {this.handleLoginSlider}/>
                <LoginSlider hide = {loginSlider} handleClose = {this.handleLoginSlider}/>
            </div>
        )
    }
}

const mapStore = ({ user }) => {
    return {
        id : parseInt(user.data.id)
    }
}

export default connect(mapStore)(Home)