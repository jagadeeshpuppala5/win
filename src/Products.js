export default function Products(props){
	return(
		<div>
			{
				props.products.map((pitem)=>(
					<div key={pitem.id} className="product-item">
						<img width="10%" src={pitem.pic}/>
						<p>{pitem.name}</p>
						<p>{pitem.price}</p>
					</div>
				))
			}
		</div>
	)
}