import React, { useRef } from "react";
import { data } from "../Data/Data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";

import "./Home.css";

const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3mq7gs5",
        "template_zika8db",
        form.current,
        "CCPljq9hfAuSSenoW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="home">
      <div
        className="aboutUs row m-5"
        style={{
          backgroundImage: `url(
           
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Qs7ZjLgHKz9-_IKvUKrp4usBoUr-p-ZxZb4MVy80vfXL2znx1A-0ocjEnjr0XhQjkeE&usqp=CAU"
          ), noRepeat`,
        }}
      >
        <div className="col-md-6 col-sm-5 p-5">
          <center>
            <h1
              className="homeFont "
              style={{
                fontFamily: "Bebas Neue",
                textShadow: "1px 1px 2px grey",
                color: "black",
              }}
            >
              e Library Application
            </h1>
          </center>
          <div className="row w-100 justify-content-center">
            <div className="col-md-10 px-5">
              <img
                className="img-fluid"
                // src="https://thumbs.dreamstime.com/b/ebook-abstract-concept-vector-illustration-searchable-digital-library-education-reading-online-easy-access-knowledge-elearning-200915844.jpg"
                src="https://cdn.dribbble.com/users/4218498/screenshots/7409408/gif_boreali_ghigliazza.gif"
                alt=""
              />
            </div>
            <div className="col-md-12 py-5 justify-content">
              <h5 className="" style={{ textAlign: "justify" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
                illo tempora voluptatibus quaerat aperiam officia minima quia
                animi aliquam unde deleniti facere expedita deserunt
                necessitatibus!
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-5 justify-content-center">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            style={{ height: "90vh", width: "100%" }}
          />
        </div>
      </div>
      <div className="trendings py-5">
        <div className="App-Home">
          <div className="home-heading">
            <marquee className="text-black fs-1.5" width="40%" direction="left">
              New And Trending
            </marquee>
          </div>

          <div className="book-content">
            <Slider {...settings}>
              {data.map((item) => (
                <div className="bookCard">
                  <div className="bookCard-top">
                    <img src={item.bookImage} alt={item.bookName} />
                    <h1>{item.title}</h1>
                  </div>
                  <div className="bookCard-bottom">
                    <h6>Rs.{item.price}</h6>
                    <p>{item.category}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="bookpage">
        <div className="home-heading">
          <marquee width="70%" direction="left">
            Most Reads 💻
          </marquee>
        </div>
        <div className="">
          <div className="row">
            <div className="d-flex">
              <div className="">
                <div className="d-flex w-100 justify-content-center align-content-center flex-wrap">
                  {data.map((book) => (
                    <>
                      {/* <img src={book.bookImage} alt={book.bookName} /> */}
                      <div className="book-align m-5 justify-content-center">
                        <div className="book-img p-5 ">
                          <img
                            src={book.bookImage}
                            className="card-img-top"
                            alt={book.bookName}
                          />
                        </div>
                        <div className=" card-body">
                          <h5 className="card-title">{book.bookName}</h5>
                          <p className="card-text">{book.category}</p>
                          <p className="card-text">{book.authorName}</p>
                          <Button>Read Now</Button>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="form-area">
          <div className="container">
            <div className="row single-form g-0">
              <div className="col-sm-12 col-lg-6">
                <div className="left">
                  <h2>
                    <span>Contact Us For</span>Enquiries
                  </h2>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 ">
                <div className="right">
                  <i className="fa fa-caret-left"></i>
                  <form ref={form} onSubmit={sendEmail}>
                    <div class="form-group">
                      <label>Your Name</label>
                      <input
                        id="fullName"
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        name="fullName"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div class="form-group">
                      <label>Email Address</label>
                      <input
                        id="email_id"
                        type="email"
                        class="form-control"
                        name="email_id"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div class="form-group">
                      <label>Message</label>
                      <textarea
                        id="message"
                        class="form-control"
                        name="message"
                        placeholder="Message"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ background: "black" }}>
        <h1 style={{ color: "white" }}>2024:Copyright: @Library.com</h1>
      </footer>
    </div>
  );
};

export default Home;
