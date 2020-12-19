import Layout from "@components/layout";
import Icons from "@components/icons";
import Button from "@components/Button";
import MuiButton from '@material-ui/core/Button'
import SwitchButton from "@components/switchbutton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@utils/auth/useUser";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin"
  }).then((res) => res.json());

export default function Index() {
  const { user, logout } = useUser();
  const { data, error } = useSWR(user ? ["/api/getFood", user.token] : null, fetcher);
  if (!user) {
    return (
      <Layout>
        <div className="relative pt-16 pb-32 mx-auto">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full px-4">
                <div className="py-10">
                  <h1 className="text-white text-5xl">Hi there!</h1>
                </div>
                <p className="text-white my-4">You are not signed in. </p>
                <Link href={"/login"}>
                  <a className="btn-teal-outline">Sign in</a>
                </Link>
                <p className="text-white my-4">
				<button 
				className=" flex border border-teal-400 rounded-md px-3 py-3"
				href="https://github.com/r951236958/nextjs-tailwindcss/"
				target="_blank"
						rel="noreferrer"
				>
				<FontAwesomeIcon icon={faGithub} className="h-6 inline-block mr-2 justify-center " />
				Button
				</button>
				  <MuiButton variant="outlined" color="primary" to="/about">
						primary
					</MuiButton>
                </p>
              </div>
            </div>
            <div className="block w-full">
              <div className="grid grid-cols-3 lg:grid-cols-10 gap-4 w-full lg:w-2/3 p-4 my-6 bg-gray-600 bg-opacity-50 justify-center text-center mx-auto">
                <Icons iconstyle="text-3xl text-green-600" icon="move_to_inbox" />
                <Icons icon="palette" />
                <Icons iconstyle="text-5xl text-yellow-400" icon="description" />
                <Icons icon="get_app" />
                <Icons iconstyle="text-2xl text-blue-400" icon="favorite_border" />
                <Icons icon="favorite" />
                <Icons icon="delete" />
                <Icons icon="edit" />
                <Icons icon="done" />
                <Icons icon="close" />
                <Icons icon="add" />
                <Icons icon="keyboard_arrow_up" />
                <Icons icon="login" />
                <Icons icon="format_list_bulleted" />
                <Icons icon="toggle_off" />
                <Icons icon="toggle_on" />
                <Icons icon="security" />

                <Icons iconstyle="w-6 h-6 text-blue-400" icon="info" />
              </div>
              <div className="w-full h-auto lg:w-2/3 p-4 my-6 bg-gray-600 bg-opacity-50 justify-center text-center mx-auto">
                <Button size="sm" type="primary">
                  Enable
                </Button>
                <Button type="primary" size="xs">
                  Update Now
                </Button>
                <Button type="secondary" size="xs">
                  Later
                </Button>
				<SwitchButton />
				<div>
					<MuiButton variant="outlined" color="primary">
						primary
					</MuiButton>
				</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-1/2 px-4">
          <div className="relative w-full px-4">
            <div className="my-4 mx-auto h-96">
              <div className="py-10">
                <h1 className="text-white text-3xl">Firebase authentication with a serverless API</h1>
              </div>
              <p className="text-white my-4">
                Go to{" "}
                <a className="text-yellow-400 hover:text-yellow-500 hover:underline text-xl" href={`https://github.com/vercel/next.js/tree/canary/examples/with-firebase-authentication`}>
                  Example
                </a>{" "}
                how to use.
              </p>
            </div>

            <div>
              <div className="my-4">
                <p className="flex items-start text-white my-4">You're signed in. Email: {user.email}</p>
                <div className="flex items-end max-w-xs xs:ml-auto xs:max-w-xs ">
                  <a className="text-center rounded-lg border border-teal-400 px-3 py-2 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150" onClick={() => logout()}>
                    Log out
                  </a>
                </div>
              </div>
              <div className="my-4">
                {error && <p className="flex items-start text-white my-4">Failed to fetch food!</p>}
                {data && !error ? (
                  <div className="flex items-start my-4">
                    {" "}
                    <p className="text-white">
                      Your favorite food is <span className="uppercase font-extrabold font-xl text-secondart bg-gray-100 bg-opacity-20 m-2 px-2 rounded">{data.food}</span>.
                    </p>
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
                <div className="flex items-end max-w-xs xs:ml-auto xs:max-w-xs">
                  <Link href={"/example"}>
                    <a className="text-center rounded-lg border border-teal-400 px-3 py-2 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150">Another example page</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
