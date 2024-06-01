
import {Listbox, ListboxItem} from "@nextui-org/react";
import { cn } from "@nextui-org/react";
import { ChevLeft, ClipIcon, InfoIcon } from "./common/icon";

// eslint-disable-next-line react/prop-types
const IconWrapper = ({ children, className }) => (
  <div className={cn(className, "flex items-center rounded-small justify-center w-7 h-7")}>
    {children}
  </div>
);

export default function SidebarItems() {
  return (
    <Listbox
      aria-label="User Menu"
      onAction={(key) => alert(key)}
      className="p-4 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-4 data-[hover=true]:bg-default-100/80",
      }}
    >
      <ListboxItem
        key="Final Result"
       
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            {/* <BugIcon className="text-lg " /> */}
            <InfoIcon/>
          </IconWrapper>
        }
      >
        Final Result
      </ListboxItem>
      <ListboxItem
        key="pull_requests"
      
        startContent={
          <IconWrapper className="bg-primary/10 text-primary">
            {/* <PullRequestIcon className="text-lg " /> */}
            <ChevLeft/>
          </IconWrapper>
        }
      >
        Insem Result
      </ListboxItem>
      <ListboxItem
        key="discussions"
     
        startContent={
          <IconWrapper className="bg-secondary/10 text-secondary">
            {/* <ChatIcon className="text-lg " /> */}
          </IconWrapper>
        }
      >
        Lab Results
      </ListboxItem>
      <ListboxItem
        key="actions"
  
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            {/* <PlayCircleIcon className="text-lg " /> */}
          </IconWrapper>
        }
      >
        Assignments
      </ListboxItem>
      <ListboxItem
        key="projects"
   
        startContent={
          <IconWrapper className="bg-default/50 text-foreground">
           <ClipIcon/>
          </IconWrapper>
        }
      >
        Certificates
      </ListboxItem>
  
      <ListboxItem
        key="contributors"

        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            {/* <UsersIcon /> */}
          </IconWrapper>
        }
      >
        Projects
      </ListboxItem>
    </Listbox>
  );
}
