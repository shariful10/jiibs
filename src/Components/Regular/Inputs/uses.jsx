import React from "react";

const uses = () => {
  const [errors, setErrors] = useState([]);
  const [inputData, setInputData] = useState({
    fullName: "",
  });

  console.log("errors boat ", errors);

  const handleChange = (e) => {
    return setInputData({
      ...inputData,
      [e?.name]: e?.value,
    });
  };

  // submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputData ", inputData);

    // error handle
    setErrors(null);
    const errorArr = validateInputData(inputData);
    console.log("errorArr ", errorArr);
    if (errorArr.length) return setErrors(errorArr);

    console.log("inputData final ", inputData);

    const newData = {
      fullName: inputData?.fullName,
      role: "user",
    };
    // console.log("newData ", newData);

    if (newData) {
      //   send to server
    }
  };

  return (
    <>
      {/* Full name */}
      <Input
        id="full_name"
        name="fullName"
        placeholder="full Name"
        handle={handleChange}
        valid={errors}
      />
      {/* Email address */}
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email address"
        handle={handleChange}
        valid={errors}
      />

      {/* Birthday */}
      <InputDate
        labelText="Birthday:"
        id="birthday"
        handle={handleChange}
        name="birthday"
        valid={errors}
      />

      {/* nationality */}
      <InputNationality
        id="nationality2"
        name="nationality"
        handle={handleChange}
        valid={errors}
      />

      {/* languages */}
      <LanguagesSelect
        id="languages"
        name="languages"
        handle={handleChange}
        valid={errors}
      />

<<<<<<< HEAD
=======
      <InputRadioBox
        serial="1"
        id="expertise_level"
        name="expertise_level"
        handle={handleChange}
        labelText1={{ value: "Professional", text: "Professional" }}
        labelText2={{ value: "Recreational", text: "Recreational" }}
        // dyn={[
        //   { value: "Professional", text: "Professional" },
        //   { value: "Professional", text: "Professional" },
        // ]}
      />

>>>>>>> 3c7eb54a968da3f700ae0419d38f7ef0b0bcf8d0
      {/* romance */}
      <InputRadio
        id="considerRomance"
        labelText="May consider romance with crew"
        handle={handleChange}
        name="romance"
        radioValue1="yes"
        radioText1="yes"
        radioValue2="no"
        radioText2="no"
        valid={errors}
      />
      {/* Upload identity photo */}
      <label
        className={`border-midBlue border rounded-[10px] overflow-hidden py-2 lg:py-2 px-2"
            htmlFor="picture ${
              errors?.some((err) => err == "picture")
                ? "!border-red-400 shadow-sm !shadow-red-300"
                : ""
            }`}
        htmlFor="identityPhoto"
      >
        <div className="h-full max-h-28">
          <UploadImage
            handle={handleChange}
            name="identityPhoto"
            id="identityPhoto"
          >
            <p>
              Personal Identity verification
              <span className="text-lightBlue text-[12px]">
                (upload a passport photo)
              </span>
            </p>
          </UploadImage>
        </div>
      </label>
    </>
  );
};

export default uses;
