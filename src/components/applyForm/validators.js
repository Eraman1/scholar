// validators.js
export const validateStep = (step, formData) => {
  const errors = {};

  if (step === 1) {
    if (!formData.studentName.trim()) {
      errors.studentName = "Student name is required";
    }

    if (!formData.mobileNo.trim()) {
      errors.mobileNo = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNo)) {
      errors.mobileNo = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.emailId.trim()) {
      errors.emailId = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
      errors.emailId = "Please enter a valid email address";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required";
    }

    if (!formData.district.trim()) {
      errors.district = "District is required";
    }

    if (!formData.pinCode.trim()) {
      errors.pinCode = "PIN code is required";
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      errors.pinCode = "Please enter a valid 6-digit PIN code";
    }
    if (!formData.isPhoneVerified) {
      errors.mobileNo = "Please verify your mobile number with OTP";
    }
    if (!formData.isEmailVerified) {
      errors.emailId = "Please verify your email with OTP";
    }
  }

  if (step === 2) {
    if (!formData.schoolCollege.trim()) {
      errors.schoolCollege = "School/College name is required";
    }

    if (!formData.aadharNo.trim()) {
      errors.aadharNo = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(formData.aadharNo.replace(/\s/g, ""))) {
      errors.aadharNo = "Please enter a valid 12-digit Aadhar number";
    }
  }

  if (step === 3) {
    if (!formData.scholarship) {
      errors.scholarship = "Please select a scholarship program";
    }

    if (!formData.studentClass) {
      errors.studentClass = "Please select your class";
    }

    if (formData.scholarship === "vstar" && !formData.combination) {
      errors.combination = "Please select your subject combination";
    }
  }

  return errors;
};

export const formatAadhar = (value) => {
  const numbers = value.replace(/\D/g, "");
  return numbers.replace(/(\d{4})(?=\d)/g, "$1 ");
};
