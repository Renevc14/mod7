const LessonInfo = ({number, title}) => {
    return (
        <div>
            <p>
                {number}: {title}
            </p>
        </div>
    );
};

export default LessonInfo;