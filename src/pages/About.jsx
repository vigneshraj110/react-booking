import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';
function About() {
    return (
    <div className="container aboutus">
        <div className="row">
           
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">About Us </h1>
                <p className="lead text-justify text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officia eligendi dolorem molestias nesciunt aliquam deserunt velit fuga quidem atque?</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</Link>
                </div>
            </div>
        </div>
        <div className="about_company">
            <h1 className="display-4">About Company</h1>
            <div className="pt-4">
                <p className="about_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, illum delectus sequi necessitatibus cum laudantium incidunt minima, voluptatibus voluptas repellat officia doloremque magnam quis, accusamus tenetur, quasi doloribus iusto quia distinctio labore optio reprehenderit aperiam suscipit dignissimos aliquid! Odit distinctio quam, excepturi repellendus sunt magni adipisci sit architecto placeat tempore numquam, ipsam nobis vitae aperiam reprehenderit inventore ipsum facilis? Sapiente iure id explicabo. Omnis, architecto quaerat! Architecto error ducimus consequuntur, asperiores fugiat nostrum veniam eaque aspernatur ab quas aliquam ipsa! Odit expedita voluptate, mollitia tenetur eveniet quisquam a veritatis. In, odit. Enim aliquid voluptates vitae pariatur facilis beatae odio labore est, voluptatem officiis! Maiores, iure molestias aliquam suscipit rem impedit veritatis architecto delectus molestiae tempora inventore beatae consectetur facere voluptas dolores labore, laboriosam officiis non alias minima dolorum fuga corrupti blanditiis. Laudantium consequatur, aspernatur beatae dicta atque labore. Molestiae illum, possimus, officia sit nihil, cupiditate nesciunt, consequatur nulla deleniti veniam modi maxime impedit delectus iste totam earum vel repellendus doloribus in quae fuga. Dignissimos, unde eius voluptatem iusto est nesciunt quaerat temporibus velit doloribus a id laborum repellendus fugit nihil, animi facilis quisquam nemo tempora accusantium doloremque libero magnam dolorum veritatis vel aspernatur. Enim reiciendis laborum, expedita illum, aliquam eaque!</p>
            </div>
        </div>
        
        <div className="team">
            <h1 className="display-4"></h1>
        </div>
        <div className="row mb-5">
        
         </div>
     </div>
    )
}
export default About;