import Avatar from "../ui/Avatar";

export interface PersonalInformation {
  name: string;
  loginName: string;
  bio: string;
  followers: number;
  following: number;
  email: string;
}
export interface Organization {
  id: number;
  name: string;
  avatarUrl: string;
}

interface LeftSideProps {
  avatarUrl: string;
  personalInformation: PersonalInformation;
  organizations: Organization[];
  className?: string;
}

export default function LeftSide({
  avatarUrl,
  personalInformation,
  organizations,
  className,
}: LeftSideProps) {
  return (
    <div className={className}>
      <Avatar url={avatarUrl} />
      <div className="h1">{personalInformation.name}</div>
      <div className="h1">{personalInformation.loginName}</div>
      <div>{personalInformation.bio}</div>
      <button>Follow / Unfollow</button>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <div>{personalInformation.followers} followers</div>
        <div>{personalInformation.following} following</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <div>24</div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <div>{personalInformation.email}</div>
      </div>
      <div>
        <div>Organizations</div>
        {organizations.map((org) => (
          <div key={org.id}>
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src={org.avatarUrl}
              alt={org.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
