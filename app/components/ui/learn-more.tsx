import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import Lucide Icon

const LearnMoreLink = () => {
  return (
    <div className="mt-[2rem]">
<Link className="" href="/learn-more" passHref>
      <div className="learn-more">
        <span>Learn More</span>
        <ArrowRight className="icon" />
      </div>
      <style jsx>{`
        .learn-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          background-color: #0070f3;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .learn-more:hover {
          background-color: #005bb5;
          transform: translateY(-2px);
        }
        .icon {
          margin-left: 8px;
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        .learn-more:hover .icon {
          transform: translateX(4px);
        }
      `}</style>
    </Link>

    </div>
  );
};

export default LearnMoreLink;
