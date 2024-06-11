import { Listbox, ListboxItem } from "@nextui-org/react";
import { cn } from "@nextui-org/react";
import { ChevLeft, ClipIcon, InfoIcon } from "./common/icon";
import { useNavigate } from "react-router-dom";
import AssignIcon from "../assets/assignmenticon.png";

const IconWrapper = ({ children, className }) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-small justify-center w-7 h-7"
    )}
  >
    {children}
  </div>
);

function SidebarItems() {
  const navigate = useNavigate();

  const handleAction = (key) => {
    switch (key) {
      case "final_result":
        navigate("/finalresults");
        break;
      case "insem_result":
        {
          navigate("/viewInsemMarks");
        }
        break;
      case "assignments":
        navigate("/viewAssignment");
        break;
      case "certificates":
        navigate("/viewCertificate");
        break;
      default:
        break;
    }
  };

  return (
    <Listbox
      aria-label="User Menu"
      onAction={handleAction}
      className="p-4 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-4 data-[hover=true]:bg-default-100/80",
      }}
    >
      <ListboxItem
        key="assignments"
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            <img src={AssignIcon} alt="assignment" />
          </IconWrapper>
        }
      >
        Assignments
      </ListboxItem>
      <ListboxItem
        key="final_result"
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <InfoIcon />
          </IconWrapper>
        }
      >
        Final Result
      </ListboxItem>
      <ListboxItem
        key="insem_result"
        startContent={
          <IconWrapper className="bg-primary/10 text-primary">
            <ChevLeft />
          </IconWrapper>
        }
      >
        Insem Result
      </ListboxItem>
      <ListboxItem
        key="certificates"
        startContent={
          <IconWrapper className="bg-default/50 text-foreground">
            <ClipIcon />
          </IconWrapper>
        }
      >
        Certificates
      </ListboxItem>
    </Listbox>
  );
}

export default SidebarItems;
