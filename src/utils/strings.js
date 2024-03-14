const english = {
  navbar: {
    matcher: "Matcher",
    cvs: "CVs",
    questions: "Questions",
    uploadingCV: "Analyzing CV...",
    uploadingJD: "Analyzing JD...",
    uploadingQuestion: "Analyzing question...",
  },
  notFound: {
    title: "Page not found",
    desc: "Sorry, the page you visited does not exist.",
    btn: "Back to home",
  },
  matchPage: {
    selectJDBtn: "Select JD",
    startMatchBtn: "Start matching",
    deleteConfirm: "Are you sure you want to delete this CV?",
    tableCVName: "CV Name",
    tableMatchScore: "Match Score",
    tableAction: "Action",
  },
  cvs: {
    cv: "CVs",
    jd: "JDs",
    confirmDeleteCV: "Are you sure you want to delete this CV?",
    confirmDeleteJD: "Are you sure you want to delete this JD?",
    newJDModalTitle: "Add new JD",
    newJDModalTextTitle: "Title",
    newJDModalTextContent: "Content",
  },
  cvDetail: {
    path: "Path",
    url: "URL",
    getQuestions: "Get Questions",
    questionLimit: "Question Limit",
  },
  questions: {
    title: "Questions",
    btn: "Add Question",
  },
  components: {
    search: {
      placeholder: "Search",
    },
    btn: {
      upload: "Upload",
      new: "New",
      view: "View",
      delete: "Delete",
      add: "Add",
      cancel: "Cancel",
    },
  },
  msg: {
    uploadError: "You can only upload PDF or DOCX file!",
    emptyField: "This field cannot be empty!",
    uploadCVSuccess: "CV uploaded successfully!",
    uploadCVError: "Failed to upload CV!",
    uploadJDSuccess: "JD uploaded successfully!",
    uploadJDError: "Failed to upload JD!",
    deleteCVSuccess: "CV deleted successfully!",
    deleteCVError: "Failed to delete CV!",
    deleteJDSuccess: "JD deleted successfully!",
    deleteJDError: "Failed to delete JD!",
  },
};

const vietnamese = {
  navbar: {
    matcher: "Tìm kiếm ứng viên",
    cvs: "CVs",
    questions: "Câu hỏi",
    uploadingCV: "Đang phân tích CV...",
    uploadingJD: "Đang phân tích JD...",
    uploadingQuestion: "Đang phân tích câu hỏi...",
  },
  notFound: {
    title: "Không tìm thấy trang",
    desc: "Xin lỗi, trang bạn truy cập không tồn tại.",
    btn: "Quay lại trang chủ",
  },
  matchPage: {
    selectJDBtn: "Chọn JD",
    startMatchBtn: "Bắt đầu so khớp",
    deleteConfirm: "Bạn có chắc chắn muốn xóa CV này không?",
    tableCVName: "Tên CV",
    tableMatchScore: "Điểm so khớp",
    tableAction: "Hành động",
  },
  cvs: {
    cv: "CVs",
    jd: "JDs",
    confirmDeleteCV: "Bạn có chắc chắn muốn xóa CV này?",
    confirmDeleteJD: "Bạn có chắc chắn muốn xóa JD này?",
    newJDModalTitle: "Thêm JD mới",
    newJDModalTextTitle: "Tiêu đề",
    newJDModalTextContent: "Nội dung",
  },
  cvDetail: {
    path: "Đường dẫn",
    url: "URL",
    getQuestions: "Lấy câu hỏi",
    questionLimit: "Giới hạn câu hỏi",
  },
  questions: {
    title: "Câu hỏi",
    btn: "Thêm câu hỏi",
  },
  components: {
    search: {
      placeholder: "Tìm kiếm",
    },
    btn: {
      upload: "Tải lên",
      new: "Mới",
      view: "Xem",
      delete: "Xóa",
      add: "Thêm",
      cancel: "Hủy",
    },
  },
  msg: {
    uploadError: "Bạn chỉ có thể tải lên file PDF hoặc DOCX!",
    emptyField: "Không được để trống trường này!",
    uploadCVSuccess: "CV tải lên thành công!",
    uploadCVError: "Tải lên CV thất bại!",
    uploadJDSuccess: "JD tải lên thành công!",
    uploadJDError: "Tải lên JD thất bại!",
    deleteCVSuccess: "Xóa CV thành công!",
    deleteCVError: "Xóa CV thất bại!",
    deleteJDSuccess: "Xóa JD thành công!",
    deleteJDError: "Xóa JD thất bại!",
  },
};

function getLanguage() {
  const language = navigator.language.split("-")[0];
  if (language === "vi") {
    return vietnamese;
  }
  return english;
}

const appStrings = {
  appName: "CV Matcher",
  language: getLanguage(),
};

export default appStrings;
