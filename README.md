**coffeeFront - A FrontEnd website promoting coffee.**

**Node.js tools used**

    "dependencies": {

"axios": "^1.6.7",

"bootstrap": "^5.3.2",

"cors": "^2.8.5",

"express": "^4.18.2",

"react": "^18.2.0",

"react-dom": "^18.2.0",

"react-router-dom": "^6.22.0"

},

**Api I use**
`const  api = 'https://strapidevelopment.onrender.com/api/coffees';`

**Retrieving the home page content with the get method using axios. UseEffect, in this code a function called fetchData() is defined to be executed once when the component is mounted. This is typically used for operations such as loading data, making an API request, etc.
**

    const [data, setData] = useState([]);

  

const  fetchData = async () => {

try {

const  response = await  axios.get(`${api}/`);

const  veri = response.data;

setData(veri);

} catch (error) {

console.log(error);

}

};

  

useEffect(() => {

fetchData();

}, []);

**After transferring the data from API into data, we can use some parts of the data with the map function.**

    const  HomeContent = ({ data }) => (

<>

{data && data.data && data.data.length > 0 && data.data.map((item) => {

return (

<div  key={item.id}>

<div  className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">

<div  className="my-3 py-3">

<div  className='item-container'  id='container'>

<div  className='item-details'>

<h2  className="display-5">{item.attributes.name}</h2>

<p>Description: {item.attributes.description}</p>

<p>Origin: {item.attributes.origin}</p>

</div>

</div>

</div>

<div  className="bg-body-tertiary shadow-sm mx-auto"  id='image'  >

<img  src={`../images/${item.attributes.name}.jpg`}  alt={item.attributes.name}  />

</div>

</div>

</div>

);

})}

</>

);

**I switched to other pages using the router.**

    <Router>

<div  className="container">

<header  className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">

<a  href="/"  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

<svg  className="bi me-2"  width="40"  height="32"><use  href="#bootstrap"/></svg>

<span  className="fs-4">Coffee</span>

</a>

  

<ul  className="nav nav-pills">

<li  className="nav-item"><a  href="/"  className="nav-link">Home</a></li>

<li  className="nav-item"><Link  to="/about"  className="nav-link">About</Link></li>

<li  className="nav-item"><Link  to="/contact"  className="nav-link">Contact</Link></li>

</ul>

</header>

{/* Routes */}

<Routes>

<Route  path="/"  element={<HomeContent  data={data}  />}  />

<Route  path="/about"  element={<About  />}  />

<Route  path="/contact"  element={<Contact  />}  />

</Routes>

<Footer  />

</div>

</Router>








