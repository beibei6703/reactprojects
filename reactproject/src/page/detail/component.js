import React, {Component} from "react"
import { Card } from 'antd';
import { Link } from 'react-router-dom'
export default class Detail extends Component{
	componentWillReceiveProps(nextProps){

		if(nextProps.match.params.id!==this.props.match.params.id){
			this.getDetailInfo(nextProps.match.params.id)
			
		}

	}
	render() {
		return (
			<div>
			    <Card title={this.props.title} bordered={false}>
			      <div dangerouslySetInnerHTML={{__html:this.props.content}}></div>
			   		<Link to = '/detail/0001'>到转到id为0001的详情页</Link>
			    </Card>
		 	</div>
		)
	}
	componentDidMount() {
		this.getDetailInfo(this.props.match.params.id)
	}
	getDetailInfo(id){
		this.props.getList(id)
		
	}
}