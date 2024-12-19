import Wrapper from "@/components/Wrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { author, categories, tags } from "@/api/api";
import { Skeleton } from "@/components/ui/skeleton";
import PostImage from "@/components/posts/PostImage";
import { NavLink } from "react-router-dom";
import Banner from "@/components/Banner";

const SinglePost = () => {
  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [postData, setPostData] = useState(null);
  const [users, setUserData] = useState(null);
  const [postCats, setPostCats] = useState(null);
  const [postTags, setPostTags] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [postDateFormat, setDateFormat] = useState("");

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_ROOT}/posts?slug=${
            params.id
          }&_fields=title,date,content,author,featured_media,categories,tags`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPostData(res.data[0]);
        console.log("Post Data", res.data[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!postData) {
      fetchPostData();
    }
  }, [params.id, postData]);

  // useEffect(() => {
  //   const fetchPostData = async () => {
  //     try {
  //       setLoading(true);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }

  //     if (!postData) {
  //       fetchPostData();
  //     }
  //   };
  // }, [params.id, postData]);

  useEffect(() => {
    if (postData) {
      const fetchUserData = async () => {
        try {
          setUserLoading(true);
          const resAuthors = await author(postData.author);
          setUserData(resAuthors.data);
          const resTags = await tags(postData.tags);
          setPostTags(resTags.data);
          const resCats = await categories(postData.categories);
          setPostCats(resCats.data);
        } catch (error) {
          console.log(error);
        } finally {
          setUserLoading(false);
        }
      };
      fetchUserData();
      const timestamp = postData.date;
      const date = new Date(timestamp);
      const pYear = date.getFullYear();
      const publishedMonth = date.getMonth();
      const publishDay = date.getDate();
      const simpleDateFormat = `${pYear}-${
        publishedMonth < 10 ? "0" : ""
      }${publishDay}-${publishDay < 10 ? "0" : ""}${publishDay}`;
      console.log(simpleDateFormat);
      setDateFormat(simpleDateFormat);
    }
  }, [postData]);

  return (
    <>
      <Banner title={isLoading ? "Post" : postData.title.rendered} />
      {!isLoading && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="">
            <div className="overflow-hidden rounded-lg">
              {postData && postData.featured_media.length >= 0 ? (
                <PostImage
                  mediaData={postData.featured_media}
                  mediaTitle={postData.title.rendered}
                  className="h-96"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/800x400"
                  alt="Featured Image"
                  className="rounded-t-lg w-full"
                />
              )}
            </div>
            <div className="mt-4 flex justify-between items-center flex-wrap">
              <div className="flex lg:items-center space-x-4 text-gray-600 lg:flex-row flex-col items-start">
                <span>
                  {userLoading ? (
                    <Skeleton className="w-[140px] h-5" />
                  ) : (
                    users &&
                    users.map((authors, userInd) => {
                      return <span key={userInd}> Author: {authors.name}</span>;
                    })
                  )}
                </span>
                <span className="flex items-center justify-center">
                  Published:{" "}
                  {isLoading ? (
                    <Skeleton className="w-[100px] h-5" />
                  ) : (
                    postDateFormat
                  )}
                </span>
                <span>Read Time: {Math.ceil(Math.random() * 10)} min</span>
              </div>
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="text-gray-600">Tags:</span>
                {userLoading ? (
                  <Skeleton className="w-[140px] h-5" />
                ) : (
                  postTags &&
                  postTags.map((tag, tagInd) => {
                    return (
                      <NavLink to={"/tag/" + tag.slug} key={tagInd}>
                        <span className="text-yellow-500 hover:text-yellow-600">
                          #{tag.name}
                        </span>
                      </NavLink>
                    );
                  })
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Categories:</span>
                {userLoading ? (
                  <Skeleton className="w-[140px] h-5" />
                ) : (
                  postCats &&
                  postCats.map((cat, catInd) => {
                    return (
                      <NavLink to={"/category/" + cat.slug} key={catInd}>
                        <span className="text-yellow-500">#{cat.name}</span>
                      </NavLink>
                    );
                  })
                )}
              </div>
            </div>
            <div className="mt-4">
              <p
                dangerouslySetInnerHTML={{ __html: postData.content.rendered }}
              ></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePost;
