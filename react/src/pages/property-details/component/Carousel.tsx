/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

function App() {
  const [bigPicture, setBigPicture] = useState(
    "https://s.oneroof.co.nz/image/73/a0/73a0183b5c2556cb0b1007a17b6af2f2.jpg?x-oss-process=image/quality,q_80/resize,w_1300/format,webp"
  );

  const updateBigPicture = (newSrc: string) => {
    setBigPicture(newSrc);
  };

  return (
    <div>
      <div className="big-picture w-full h-72 px-28">
        <img src={bigPicture} className="w-full h-full" alt="Profile Image" />
      </div>

      <div className="small-picture flex px-28 gap-5 py-4">
        <div
          className="carousel-item"
          onClick={() =>
            updateBigPicture(
              "https://s.oneroof.co.nz/image/23/e4/23e4c9a50b5f26ad4e38c2a1aac14203.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            )
          }
        >
          <img
            src="https://s.oneroof.co.nz/image/23/e4/23e4c9a50b5f26ad4e38c2a1aac14203.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            className="rounded-box w-52 h-32"
            alt="Small Picture 1"
          />
        </div>
        <div
          className="carousel-item"
          onClick={() =>
            updateBigPicture(
              "https://s.oneroof.co.nz/image/fd/3c/fd3c02908c44ab56a7a908efaa2dd929.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            )
          }
        >
          <img
            src="https://s.oneroof.co.nz/image/fd/3c/fd3c02908c44ab56a7a908efaa2dd929.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            className="rounded-box w-52 h-32"
            alt="Small Picture 2"
          />
        </div>
        <div
          className="carousel-item"
          onClick={() =>
            updateBigPicture(
              "https://s.oneroof.co.nz/image/d5/da/d5da6016487603350ac7f551b9d5da65.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            )
          }
        >
          <img
            src="https://s.oneroof.co.nz/image/d5/da/d5da6016487603350ac7f551b9d5da65.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            className="rounded-box w-52 h-32"
            alt="Small Picture 3"
          />
        </div>
        <div
          className="carousel-item"
          onClick={() =>
            updateBigPicture(
              "https://s.oneroof.co.nz/image/63/35/6335f6bd69a88c9414b708dca9983332.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            )
          }
        >
          <img
            src="https://s.oneroof.co.nz/image/63/35/6335f6bd69a88c9414b708dca9983332.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            className="rounded-box w-52 h-32"
            alt="Small Picture 4"
          />
        </div>
        <div
          className="carousel-item"
          onClick={() =>
            updateBigPicture(
              "https://s.oneroof.co.nz/image/60/01/600189ef82a8ff016f96baba1d37fd98.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            )
          }
        >
          <img
            src="https://s.oneroof.co.nz/image/60/01/600189ef82a8ff016f96baba1d37fd98.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp"
            className="rounded-box w-52 h-32"
            alt="Small Picture 5"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
