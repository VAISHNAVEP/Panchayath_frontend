import React, { useState } from "react";
import { toast } from "react-toastify";
import { ProjectDetails } from "../../Service/AdminApi";
const Project = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("content", content);

    ProjectDetails(formData)
      .then((res) => {
        toast.success("project data uploaded successful", {
          position: "top-center",
        });
        console.log(res);
      })
      .catch((err) => {
        toast.error("project data uploaded failed", {
          position: "top-center",
        });
        console.log(err);
      });
  };
  return (
    <div className="container mt-5">
      <form encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            Upload File
          </label>
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Project;
