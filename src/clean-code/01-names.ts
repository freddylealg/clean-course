(() => {

    // Ejemplo - mal código.
    // Archivos a evaluar - files to evaluate
    const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = fs.map( f => f.f );

    // mejor código mejor descrito
    const filesToEvaluate = [
        { id: 1, flagToDelete: false },
        { id: 2, flagToDelete: false },
        { id: 3, flagToDelete: true },
        { id: 4, flagToDelete: false },
        { id: 5, flagToDelete: false },
        { id: 7, flagToDelete: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagToDelete );


    
    // malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const ddmmyyyy = new Date();
    const now = new Date();
    
    // días transcurridos - elapsed time in days
    const d: number = 23;
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const dir = 33;
    const filesNumber = 33;
    
    // primer nombre - first name
    const nombre = 'Fernando';
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const apellido = 'Herrera';
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const dsm = 12;
    const daysSinceNotification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6;
    const maxClassesPerStudent = 6;


})();



