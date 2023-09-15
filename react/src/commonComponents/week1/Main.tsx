import React from "react";
import MessageFromMongo from "./MessageFromMongo";

const Main = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="bg-turnersblue p-8">
        <h1 className="text-3xl text-center text-white font-bold mb-8">Fullstack Web App</h1>
        <h1 className="text-lg text-center text-white font-regular mb-4">Pulling data from mongoDB</h1>
        <h1 className="text-lg text-center text-white font-regular mb-4">Containerize multiple applications and using Docker Compose</h1>
      </div>
      <div className="flex justify-center mt-8">
        <MessageFromMongo />
      </div>
    </div>
  );
};

export default Main;
