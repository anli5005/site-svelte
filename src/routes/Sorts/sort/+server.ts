import { redirect, type RequestHandler } from "@sveltejs/kit";

export const prerender = true;

export const GET: RequestHandler = async ({ url }) => {
    redirect(303, `/Sorts/sort/index.html?${url.searchParams}`);
};