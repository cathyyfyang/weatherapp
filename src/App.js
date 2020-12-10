//index.jsx
import React, { Component } from 'react';
import axios from 'axios';
import Demo from './Demo';
 
 
export default class demo extends Component {
    constructor() {
        super()
        this.state = {
            getDataFromBase: ''
        }
       //创建接收参数的对象
        this.user = {
            phone: '',
            userName: '',
            passWord: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080').then((res) => {//请求了我们开启的服务器地址
            this.setState({
                getDataFromBase: res.data
            })
            console.log(res)
        })
    }
    register = () => {
        var _this = this
        axios.post('http://localhost:8080', {
            data: JSON.stringify(_this.user) // 用JSON格式传输数据更优
        }).then((res) => {
            console.log(res)// 这是从后台返回的数据
        })
    }
    render() {
        return (
            <div>
                <Demo />
                <span>{this.state.getDataFromBase}</span>
                <div className='register'>
                    phone：<input type="text" onChange={(e) => { this.user.phone = e.target.value }} />
                    username：<input type="text" onChange={(e) => { this.user.userName = e.target.value }} />
                    password：<input type="password" onChange={(e) => { this.user.passWord = e.target.value }} />
                    <button onClick={this.register}>submit</button>
                </div>
            </div>
        )
    }
}
