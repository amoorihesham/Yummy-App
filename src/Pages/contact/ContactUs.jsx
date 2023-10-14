import React from "react";

const ContactUs = () => {
  return (
    <div class="contact-us w-75 mx-auto">
      <div class="row mb-3">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
            id="nameInput"
           
          />
          <div id="nameAlert" class=" alert alert-danger mt-3 d-none">
            Name Field:
            <ul>
              <li>* Required</li>
              <li>* Can't Be less Than 4 Chars</li>
              <li>* Can't Be Empty</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
            id="lastNameInpu"
           
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input
            type="number"
            class="form-control"
            placeholder="Your Phone"
            aria-label="Your Phone"
            id="phoneInput"
           
          />
          <div id="phoneAlert" class=" alert alert-danger mt-3 d-none">
            Phone Field:
            <ul>
              <li>* Required</li>
              <li>* Can't Be less Than 12 Digit</li>
              <li>* Can't Be Empty</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <input
            type="number"
            class="form-control"
            placeholder="Your Age"
            aria-label="Your Age"
            id="ageInput"
           
          />
          <div id="ageAlert" class=" alert alert-danger mt-3 d-none">
            Age Field:
            <ul>
              <li>* Required</li>
              <li>* Can't Be Empty</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input
            type="email"
            class="form-control"
            placeholder="Your Email"
            aria-label="Your Email"
            id="emailInput"
           
          />
          <div id="emailAlert" class=" alert alert-danger mt-3 d-none">
            Email Field:
            <ul>
              <li>* Required</li>
              <li>* Must Be valid Email</li>
              <li>* Can't Be Empty</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <input
            type="password"
            class="form-control"
            placeholder="Your Password"
            aria-label="Your Password"
            id="passwordInput"
           
          />
          <div id="passwordAlert" class=" alert alert-danger mt-3 d-none">
            Password Field:
            <ul>
              <li>* Required</li>
              <li>* Must Contains Special Char and Numbers</li>
              <li>* Can't Be Less Than 6 digits Or More Than 16 Digits</li>
            </ul>
          </div>
        </div>
      </div>
      <button disabled="" class="btn btn-danger" type="submit" id="btn-send">
        {" "}
        Submit
      </button>
    </div>
  );
};

export default ContactUs;
