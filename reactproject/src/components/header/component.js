import React, { Component } from 'react'
import {Form, Modal, Row, Col, Menu, Icon, Button ,Input } from 'antd';

import styles from './style.mcss'
const FormItem = Form.Item;
class Header extends Component{
	constructor(props){
		super (props)
		this.handelClick = this.handelClick.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	// shouldComponentUpdate(nextProps ){
	// 	if(nextProps.list.length!==this.props.list.length){
	// 		return true
	// 	}else if(nextProps.isLogin!==this.props.isLogin){
	// 		return true

	// 	} else{
	// 		return false
	// 	}
	// }
	render(){
		 const { getFieldProps } = this.props.form;
		const logo = require('../../assets/imgs/logo.png')
		const menuItem = this.props.list.map((item,index)=>{
			return ( <Menu.Item key={item.id}>
			          <Icon type="appstore" />{item.title}
			        </Menu.Item> )

		})
		let button = null
		if(this.props.isLogin===true){
			button = <Button type="primary" style= {{marginTop:"20px"}} onClick={this.props.logout}>退出</Button>
		}else{
			button =  <Button type="primary" style= {{marginTop:"20px"}} onClick={this.props.openModal}>登录</Button>
		}
		return (
		<div>
			 <Row>
			      <Col span={4}>
				      <img src={logo}
				      onClick={this.handelClick}
				       alt="" className={styles.logo}/>
			      </Col>
			      <Col span={18}>
			      		<Menu mode ='horizontal' className={styles.menu}>
			      			{menuItem}
			      		</Menu>
			      </Col>
			      <Col span={2}>
			      	{button}
			      </Col>
		    </Row>
		      <Modal title="登录" visible={this.props.showModal}
		          onOk={this.handleSubmit} onCancel={this.props.hideModal} 
					okText="登录"
					cancelText="取消"
		          >
		          <Form  onSubmit={this.handleSubmit}>
			        <FormItem >
			          <Input placeholder="请输入账户名"	
			           {...getFieldProps('userName')}	/>	          
			        </FormItem>
			        <FormItem>
			          <Input type="password" placeholder="请输入密码"
			           {...getFieldProps('password')}/>
			        </FormItem>
			       
			      </Form>
		       </Modal>
			<table className={styles.tab}>
				<tbody>
					<tr style={{background:"pink"}}>
						<td>常速英语</td>
						<td colSpan ="5">慢速英语</td>
						<td colSpan ="5">英语教学</td>
					</tr>
					<tr>
						<td>音频</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
					</tr>
					<tr>
						<td>视频</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
					</tr>
					<tr>
						<td>翻译</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
						<td>科学报道</td>
					</tr>
				</tbody>
			</table>
	      
		</div>

		)
	}
	componentDidMount(){
		this.props.getList()
		
	}
	handelClick(){
		this.props.history.push('/')
	}
	handleSubmit(){
		
			this.props.form.validateFields((err, values) => {
				if (!err) {
					this.props.checkLogin(values.userName,values.password)
					
				}
					
			})
		
	}
}
export default Form.create()(Header)