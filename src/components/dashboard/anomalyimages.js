import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ListSubheader from "@mui/material/ListSubheader";

export default function AnomalyImages() {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      class: "D21",
      time: "11:43 17-10-22",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      class: "D14",
      time: "12:15 17-10-22",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      class: "D32",
      time: "13:38 17-10-22",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      class: "D9",
      time: "14:05 17-10-22",
      cols: 2,
    },
  ];

  const allItemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      class: "D21",
      time: "11:43 17-10-22",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      class: "D14",
      time: "12:15 17-10-22",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      class: "D32",
      time: "13:38 17-10-22",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      class: "D9",
      time: "14:05 17-10-22",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      class: "D12",
      time: "14:28 17-10-22",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      class: "D26",
      time: "15:19 17-10-22",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      author: "@peterlaster",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      author: "@southside_customs",
      cols: 2,
    },
  ];

  return (
    <>
      <div className="w-full h-full rounded-md shadow-md bg-white">
        <div className="w-full h-1/6 flex font-semibold text-lg text-gray-600 pl-5 ">
          <span className="self-center">Anomaly Images</span>
        </div>
        <div className="w-full h-4/6 pl-1">
          <ImageList className="w-full h-full">
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.class}
                  loading="lazy"
                />
                <ImageListItemBar title={item.class} subtitle={item.time} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="w-full h-1/6 flex justify-end pr-5">
          <button
            type="button"
            onClick={handleClickOpen}
            className="self-center text-sm text-blue-600 hover:bg-blue-100"
          >
            View more images
            <hr className="" />
          </button>
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
          >
            <DialogContent>
              <div className="w-full h-full flex flex-col space-y-3 p-2">
                <div className="w-full h-1/6 text-gray-600 font-semibold text-lg">All anomaly images</div>
                <div className="w-full h-5/6">
                  <ImageList sx={{ width: 850, height: 450 }}>
                    <ImageListItem key="Subheader" cols={3}>
                      <ListSubheader
                        className=""
                        component="div"
                      ></ListSubheader>
                    </ImageListItem>
                    {allItemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.class}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          title={item.class}
                          subtitle={item.time}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
