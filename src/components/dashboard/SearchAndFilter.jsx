import { Filter } from "lucide-react";

const SearchAndFilter = ({ searchTerm, setSearchTerm, filterField, setFilterField, filterValue, setFilterValue, students }) => {
    const filterOptions = {
        class: [...new Set(students.map(s => s.class))],
        city: [...new Set(students.map(s => s.city))],
        combination: [...new Set(students.map(s => s.combination))],
        scholarship: [...new Set(students.map(s => s.scholarship))]
    };

    return (
        <div className="mb-4 space-y-3">
            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                    type="text"
                    placeholder="Search students by name, mobile, email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                    <Filter className="text-gray-400 w-4 h-4" />
                    <select
                        value={filterField}
                        onChange={(e) => {
                            setFilterField(e.target.value);
                            setFilterValue('');
                        }}
                        className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Filter by...</option>
                        <option value="class">Class</option>
                        <option value="city">City</option>
                        <option value="combination">Combination</option>
                        <option value="scholarship">Scholarship</option>
                    </select>
                </div>

                {filterField && (
                    <select
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">All {filterField}</option>
                        {filterOptions[filterField]?.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                )}

                {(searchTerm || filterValue) && (
                    <button
                        onClick={() => {
                            setSearchTerm('');
                            setFilterField('');
                            setFilterValue('');
                        }}
                        className="text-sm text-gray-500 hover:text-gray-700 underline"
                    >
                        Clear filters
                    </button>
                )}
            </div>
        </div>
    );
};