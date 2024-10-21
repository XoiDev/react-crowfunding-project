import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import ButtonGoogle from "components/button/ButtonGoogle";
import FormGroup from "components/common/FormGroup";
import IconEyeToggle from "components/icons/IconEyeToggle";
import { Input } from "components/input";
import { Label } from "components/label";
import useToggleValue from "hooks/useToggleValue";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import { useEffect } from "react";
const SignInPage = () => {
  const schema = yup.object({
    email: yup
      .string()
      // Kiểm tra định dạng email trước
      .required("This field is required")
      .email("Invalid email format"), // Sau đó mới kiểm tra yêu cầu
    password: yup
      .string()
      .min(8, "password must be 8 character")
      .required("this field is required"),
  });
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignIn = (values) => {
    console.log(values);
    console.log(errors); //
  };
  console.log(errors);

  const { value: showPassword, handleToggle: handleOpenEye } = useToggleValue();
  return (
    <LayoutAuthentication heading="WelCome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Dont have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>
      <form noValidate onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors?.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            error={errors?.password?.message}
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleOpenEye}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          {" "}
          <div className="text-right cursor-pointer">
            <span className="inline-block text-sm font-medium text-primary">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button className="w-full bg-primary" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
