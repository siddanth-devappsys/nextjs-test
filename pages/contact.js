import Layout from "../component/layout";
import Sidebar from "../component/sidebar";


export default function Contact() {
  return (
    <section>
        <div>
            Contact Page
        </div>
        <p>
            Lorem500
            Lorem500
        </p>
        
    </section>
  )
}


Contact.getLayout = function getLayout(page){
    return(
        <Layout>
            <Sidebar/>
                {page}
        </Layout>
    )
}
