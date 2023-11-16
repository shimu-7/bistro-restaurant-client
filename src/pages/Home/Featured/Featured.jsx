import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import moment from 'moment';
import './Featured.css'


const Featured = () => {
    const date = moment().format('LL');
    return (

        <div className="featured-item bg-fixed  my-20  text-white">
            <div className=" h-full bg-black bg-opacity-30 py-10">
                <SectionTitle heading={"featured item"} subHeading={"Check it out"}></SectionTitle>
                <div className="md:flex justify-center items-center py-20 px-36">
                    <div>
                        <img src={featured} alt="" />
                    </div>
                    <div className="md:ml-10 ">
                        <p>{date}</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="  btn btn-outline bottom-0 border-b-4 text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Featured;