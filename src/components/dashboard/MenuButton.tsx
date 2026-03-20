// src/components/dashboard/MenuButton.tsx

import type { IconButtonProps } from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export interface MenuButtonProps extends IconButtonProps {
  showBadge?: boolean;
}

export default function MenuButton({
                                     showBadge = false,
                                     ...props
                                   }: MenuButtonProps) {
  return (
      <Badge
          color="error"
          variant="dot"
          invisible={!showBadge}
          sx={{ '& .MuiBadge-badge': { right: 2, top: 2 } }}
      >
        <IconButton size="small" {...props} />
      </Badge>
  );
}