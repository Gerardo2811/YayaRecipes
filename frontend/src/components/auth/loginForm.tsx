"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from "next/image";
import logo from "../../assets/general/logo.png";


export default function LoginForm() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Correo electrónico inválido').required('El correo es requerido'),
      password: Yup.string().min(6, 'Debe tener mínimo 8 caracteres').required('La contraseña es requerida'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-md p-8 shadow-lg rounded-lg">
      <Image className="mx-auto block rounded" alt="logo" src={logo} height={100} width={100} />
      <h2 className="text-2xl font-bold mb-6 text-black text-center mt-3">Inicio de sesión</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-black" htmlFor="email">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          className={`w-full px-4 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary`}
          {...formik.getFieldProps('email')}
          
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-black" htmlFor="password">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className={`w-full px-4 py-2 border  ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary`}
          {...formik.getFieldProps('password')}
        />
      </div>
      { formik.touched.password && formik.errors.password ? (
        <div className='text-red-500 text-sm mt-1'>{formik.errors.password}</div>
      ): null}
      <button
        type="submit"
        className="w-full mt-2 bg-primary text-white py-2 rounded-lg hover:bg-accent"
      >
        Acceder
      </button>
    </form>
  );
}
