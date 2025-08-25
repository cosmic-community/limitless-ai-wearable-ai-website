import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { metadata } = member

  return (
    <div className="bg-white rounded-lg p-6 text-center card-hover">
      {/* Photo */}
      {metadata?.photo && (
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src={`${metadata.photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={metadata.full_name}
            className="w-full h-full object-cover"
            width="96"
            height="96"
          />
        </div>
      )}

      {/* Name and Role */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {metadata?.full_name}
      </h3>
      <p className="text-primary font-medium mb-3">
        {metadata?.role}
      </p>

      {/* Bio */}
      {metadata?.bio && (
        <p className="text-gray-600 text-sm">
          {metadata.bio}
        </p>
      )}
    </div>
  )
}