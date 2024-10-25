import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import FormGroup from "components/common/FormGroup";
import IconEyeToggle from "components/icons/IconEyeToggle";
import { Input } from "components/input";
import { Label } from "components/label";
import useToggleValue from "hooks/useToggleValue";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});
const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleSignUp = (values) => {
    console.log("handleSignUp ~ values", values);
  };
  // dùng hook usetoggle
  const { value: acceptTerm, handleToggle: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggle: handleOpenEye } = useToggleValue();

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border dark:border-darkStroke dark:text-white gap-x-3 border-strock rounded-xl text-text2">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center dark:text-white lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form noValidate onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            error={errors?.name?.message}
            control={control}
            name="name"
            placeholder="Jhon Doe"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            error={errors?.email?.message}
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
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
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs lg:text-sm dark:text-text3 text-text2">
              I agree to the
              <span className="underline text-secondary">
                {" "}
                Terms of Use
              </span>{" "}
              and have read and understand the
              <span className="underline text-secondary"> Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button
          className="w-full"
          kind="primary"
          href="/start-campaign"
          type="submit"
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
