import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  
  try {
    const result = await sql`SELECT * FROM Tabella WHERE subject <> ''`;
    const rows = result.rows;
    console.log(rows)
    return NextResponse.json(rows);

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
export async function POST(request: Request) {
  const appuntamento = await request.json();
  try {
    await sql `INSERT INTO Tabella (subject, cognome, cellulare, servizi, annos, annoe, meses, mesee, gionos, giornoe, oras, orae, minutos, minutoe) VALUES (${appuntamento.subject}, ${appuntamento.cognome}, ${appuntamento.cellulare}, ${appuntamento.servizi}, ${appuntamento.annos}, ${appuntamento.annoe}, ${appuntamento.meses}, ${appuntamento.mesee}, ${appuntamento.gionos}, ${appuntamento.giornoe}, ${appuntamento.oras}, ${appuntamento.orae}, ${appuntamento.minutos}, ${appuntamento.minutoe});
  `;
    return NextResponse.json({ message: 'Appuntamento salvato' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Errore nel salvataggio dell\'appuntamento' }, { status: 500 });
  }
}


export async function DELETE(request: Request) {
  try {
    const Cellulare = await request.json();
    // Verifica se il cellulare è stato fornito
     await sql
      `DELETE FROM Tabella 
       WHERE subject = ${Cellulare.subject} AND cognome = ${Cellulare.cognome} 
       AND annos = ${Cellulare.annos} AND meses = ${Cellulare.meses} AND gionos = ${Cellulare.gionos} AND minutos = ${Cellulare.minutos}`,
      []
    ;


    return NextResponse.json({ message: 'Appuntamento cancellato con successo' });
  } catch (error) {
    console.error('Errore durante la cancellazione dell\'appuntamento:', error);
    return NextResponse.json({ error: 'Errore durante la cancellazione dell\'appuntamento' }, { status: 500 });
  }
}