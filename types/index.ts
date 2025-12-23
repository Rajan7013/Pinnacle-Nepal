export interface Profile {
    id: string;
    email: string;
    role: 'student' | 'admin' | 'super_admin';
    full_name: string;
    phone?: string;
    created_at?: string;
}

export interface University {
    id: string;
    name: string;
    country: string;
    ranking: number;
    image_url: string;
}

export interface Application {
    id: string;
    student_id: string;
    university_id: string;
    status: 'pending' | 'reviewing' | 'visa_processing' | 'completed' | 'rejected';
    documents: string[];
    created_at: string;
}
