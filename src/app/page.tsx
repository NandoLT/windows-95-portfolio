"use client";

import IconSystem from "@components/IconSystem/IconSystem";
import Taskbar from "@operativeSystemUi/Taskbar/TaskBar";
import { FolderFile } from "@react95/icons";

const Home = () => {
  const onClickIcon = () => {
    alert("Click en icono de escritorio");
  };

  return (
    <>
      <main className="grid grid-flow-col grid-cols-12 grid-rows-12 gap-5 p-10">
        {/*Serie de iconos temporales mientras se establece el sistama de archivos y su lectura y ejecución en el sistema */}
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
        <IconSystem
          name="Explorer"
          onClick={onClickIcon}
          icon={<FolderFile variant="32x32_4" />}
        />
      </main>
      <footer>
        <Taskbar />
      </footer>
    </>
  );
};

export default Home;
