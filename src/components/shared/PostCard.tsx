import { Models } from "appwrite";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  return <div className="post-card">PostCard</div>;
};
export default PostCard;
