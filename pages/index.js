import React, {Component} from 'react'
import Link from 'next/link'
import Router from 'next/Router'

class IndexPage extends Component {
	static async getInitialProps(context){
		const promise = new Promise((resolve, reject) => {
			setTimeout(()=>{
				resolve({appName:"Super App"})
			},1000)
		})
		// console.log(context)
		return promise
	}

	render (){
		return(
			<div>
				<h1>The Main Page of {this.props.appName}</h1>
				<p>Go to{" "} <Link href="/auth">Auth</Link></p>
				<button onClick={()=>Router.push('/auth')}>Go to Auth</button>
			</div>
		)
	}
}

export default IndexPage