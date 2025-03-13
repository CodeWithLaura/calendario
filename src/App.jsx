import React from 'react';
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS, RESOURCES } from "./events/events";

export default function Page() {
  return (
    <>
      <Scheduler
        view="week"
        events={EVENTS}
        selectedDate={new Date(2025, 2, 12)}
        resources={RESOURCES}
        resourceFields={{
          idField: "admin_id",       // ID de recurso
          textField: "admin_name",   // Nombre del recurso
          avatarField: "avatar",     // Imagen del recurso
          subTextField: "mobile",    // Subtexto del recurso (número móvil)
          colorField: "color",
          description: "description"       // Color del recurso
        }}
        fields={[
          {
            name: "admin_id",
            type: "select",
            default: RESOURCES[0].admin_id,
            options: RESOURCES.map((res) => {
              return {
                id: res.id,
                text: `${res.admin_name} ${res.mobile}`,
                value: res.admin_id
              }
            })
          },
          {
            name: "description",
            type: "input",
            default: null,
            config: { label: "Descripción", multiline: true, rows: 4 }
          }
        ]}
      />
    </>
  );
}






