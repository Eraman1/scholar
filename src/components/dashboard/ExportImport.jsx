import { Download, Upload } from "lucide-react";

// Export/Import Component
const ExportImport = ({ students, onImport }) => {
    const [showExportOptions, setShowExportOptions] = useState(false);
    const fileInputRef = useState(null);

    const handleFileImport = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                if (file.name.endsWith('.json')) {
                    const data = JSON.parse(e.target.result);
                    onImport(data);
                } else if (file.name.endsWith('.csv')) {
                    const lines = e.target.result.split('\n');
                    const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
                    const data = lines.slice(1).filter(line => line.trim()).map((line, index) => {
                        const values = line.split(',').map(v => v.replace(/"/g, ''));
                        const obj = { _id: Date.now() + index };
                        headers.forEach((header, i) => {
                            obj[header] = values[i] || '';
                        });
                        return obj;
                    });
                    onImport(data);
                }
                event.target.value = '';
            } catch (error) {
                alert('Error importing file. Please check the format.');
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="relative">
            <div className="flex gap-2">
                <button
                    onClick={() => setShowExportOptions(!showExportOptions)}
                    className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    <Download className="w-4 h-4" />
                    Export
                </button>

                <label className="flex items-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 cursor-pointer">
                    <Upload className="w-4 h-4" />
                    Import
                    <input
                        type="file"
                        accept=".json,.csv"
                        onChange={handleFileImport}
                        className="hidden"
                        ref={fileInputRef}
                    />
                </label>
            </div>

            {showExportOptions && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <button
                        onClick={() => {
                            exportToCSV(students, 'students.csv');
                            setShowExportOptions(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        Export as CSV
                    </button>
                    <button
                        onClick={() => {
                            exportToJSON(students, 'students.json');
                            setShowExportOptions(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        Export as JSON
                    </button>
                </div>
            )}
        </div>
    );
};
