import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
    redirect(303, `/Sorts/sort/activities/index.html?${url.searchParams}`);
};