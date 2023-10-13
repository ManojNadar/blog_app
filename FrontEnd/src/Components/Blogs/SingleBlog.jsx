import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../ApiConfig";
import toast from "react-hot-toast";
import "../../Styles/BlogsCss/SingleBlog.css";
import Navbar from "../Navbar";
import { MyContext } from "../Context/BlogContext";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState({});
  const { id } = useParams();
  const { state } = useContext(MyContext);

  //   console.log(singleBlog);
  useEffect(() => {
    async function getSingleBlog() {
      try {
        const response = await api.post("/singleblog", { id });

        if (response.data.success) {
          setSingleBlog(response.data.singleBlog);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    getSingleBlog();
  }, [id]);

  console.log(id, "params");
  return (
    <>
      <div className="singleBlogContainer">
        <Navbar />

        <div className="singleBlogMainSection">
          <div className="singleBlogPage">
            {state?.currentuser?.role == "User" && (
              <div className="heartSaveIcons">
                <div className="heart">
                  <AiFillHeart />
                </div>
                <div className="save">
                  <BsFillBookmarkFill />
                </div>
              </div>
            )}
            <div className="date">{singleBlog.date}</div>
            <div className="singlePageBlogImage">
              <img src={singleBlog.image} alt="" />
            </div>
            <div className="singlePageBlogDetails">
              <h5>{singleBlog.title}</h5>
              <p>{singleBlog.description}</p>
              <span className="knowmore">Know More</span>
            </div>
            {state?.currentuser ? (
              <div className="addComment">
                <h5>Add a Comment</h5>
                <input placeholder="Add a comment" />

                <div className="commentsHeading">
                  <h3>Comments</h3>

                  <div className="comments">
                    <h6>Manoj Nadar</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt, animi.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="loginForComments">Log in for Comment</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
